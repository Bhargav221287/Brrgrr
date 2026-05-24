const express = require('express');
const mysql = require('mysql2');
const session = require('express-session');
const XLSX = require('xlsx');
const path = require('path');
const { Post } = require('./models/BlogModels');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

app.use(session({
    secret: 'central_kitchen_and_blog_secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
}));

const dbPool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'sr@221287',
    database: 'blog_db',
    waitForConnections: true,
    connectionLimit: 10
}).promise();

const requireAuth = (req, res, next) => {
    if (!req.session || !req.session.user) {
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            return res.status(401).json({ error: 'Unauthenticated connection context.' });
        }
        return res.redirect('/login.html');
    }
    next();
};

const requireStaff = (req, res, next) => {
    if (!req.session || !req.session.user || req.session.user.role !== 'staff') {
        return res.status(403).send('<h3>Access Forbidden</h3><p>Clearance tier requirements unmet.</p>');
    }
    next();
};

app.post('/auth/login', async (req, res) => {
    const { username, password, interface_type } = req.body;
    try {
        const [users] = await dbPool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
        if (users.length > 0) {
            const loggedUser = users[0];
            if (interface_type === 'staff' && loggedUser.role !== 'staff') {
                return res.send('<h3>Access Revoked</h3><p>This account does not possess Staff clearances.</p><a href="/login.html">Return</a>');
            }
            req.session.user = { id: loggedUser.id, username: loggedUser.username, role: loggedUser.role };
            if (loggedUser.role === 'staff') {
                res.redirect('/staff/dashboard');
            } else {
                res.redirect('/customer/dashboard');
            }
        } else {
            res.send('<h3>Access Denied</h3><p>Invalid account identity matches.</p><a href="/login.html">Return</a>');
        }
    } catch (err) { res.status(500).send(err.message); }
});

app.post('/auth/signup', async (req, res) => {
    const { username, password, role } = req.body;
    const validatedRole = (role === 'staff') ? 'staff' : 'customer';
    try {
        await dbPool.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, password, validatedRole]);
        res.send('<h3>Enrollment Complete</h3><p>Your user profile footprint has been secured.</p><a href="/login.html">Proceed to Portal Login</a>');
    } catch(e) { res.status(500).send("User footprint registration conflict: " + e.message); }
});

app.get('/auth/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login.html');
});

app.get('/customer/dashboard', requireAuth, async (req, res) => {
    if (req.session.user.role !== 'customer') {
        return res.status(401).send('Please authenticate via Customer Gateway.');
    }
    res.sendFile(path.join(__dirname, 'customer.html'));
});

app.get('/staff/dashboard', requireAuth, requireStaff, async (req, res) => {
    try {
        const [orders] = await dbPool.query('SELECT * FROM orders ORDER BY order_date DESC');
        let staffHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Brrgrr | Kitchen Dashboard</title>
                <link rel="stylesheet" href="/style.css">
                <script>
                    function syncStaffTheme() {
                        const isDark = localStorage.getItem('staff-dark-mode') === 'true';
                        if (isDark) {
                            document.documentElement.setAttribute('data-theme', 'dark');
                            document.getElementById('checkbox-theme-toggle').checked = true;
                            document.getElementById('theme-mode-label').innerText = "Dark Mode Active";
                        }
                    }
                    function toggleStaffTheme() {
                        const cb = document.getElementById('checkbox-theme-toggle');
                        if (cb.checked) {
                            document.documentElement.setAttribute('data-theme', 'dark');
                            localStorage.setItem('staff-dark-mode', 'true');
                            document.getElementById('theme-mode-label').innerText = "Dark Mode Active";
                        } else {
                            document.documentElement.setAttribute('data-theme', 'light');
                            localStorage.setItem('staff-dark-mode', 'false');
                            document.getElementById('theme-mode-label').innerText = "Light Mode Active";
                        }
                    }
                    window.onload = syncStaffTheme;
                </script>
            </head>
            <body>
                <div class="portal-utility-header">
                    <div class="theme-switch-wrapper">
                        <label class="theme-switch" for="checkbox-theme-toggle">
                            <input type="checkbox" id="checkbox-theme-toggle" onclick="toggleStaffTheme()">
                            <span class="slider"></span>
                        </label>
                        <span id="theme-mode-label" style="font-size: 0.85em; font-weight: 700; color: var(--text-muted-light);">Light Mode</span>
                    </div>
                    <div class="nav-links-menu">
                        <a href="/api/posts"> Go Manage Blog Application Archive System</a>
                    </div>
                </div>
                <div id="main-wrapper">
                    <div id="brand-header">
                        <h1>Kitchen Management Panel</h1>
                        <p class="subtitle">Welcome back, <strong>${req.session.user.username}</strong> | <a href="/auth/logout" style="color:var(--text-muted-light);">Disconnect Session</a></p>
                    </div>
                    <div class="portal-section-card">
                        <h3 style="margin-top:0; color:var(--primary-neon); border-bottom:1px solid var(--border-light); padding-bottom:10px;">Active Kitchen Order Workloads</h3>
                        <table style="width:100%; border-collapse: collapse; margin-top:15px;">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Items Breakdown</th>
                                    <th>Price</th>
                                    <th>Current Status</th>
                                    <th>Operational Action Flags</th>
                                </tr>
                            </thead>
                            <tbody>
        `;
        orders.forEach(o => {
            staffHTML += `
                <tr style="border-bottom: 1px solid var(--border-light);">
                    <td style="padding:12px 8px;"><strong>#00${o.id}</strong></td>
                    <td style="padding:12px 8px;">${o.customer_name}</td>
                    <td style="padding:12px 8px; max-width:400px;"><small style="color:var(--text-muted-light); font-weight:500;">${o.items_summary}</small></td>
                    <td style="padding:12px 8px;"><strong style="color:var(--primary-neon);">₹${parseFloat(o.total_price).toFixed(2)}</strong></td>
                    <td style="padding:12px 8px;"><span class="badge status-${o.status}">${o.status}</span></td>
                    <td style="padding:12px 8px; display:flex; gap:8px;">
                        <a href="/staff/orders/update/${o.id}/Preparing" class="btn-action-main" style="text-decoration:none; font-size:12px; padding:6px 12px; background:#31708f; color:white;">Preparing</a>
                        <a href="/staff/orders/update/${o.id}/Finished" class="btn-action-main" style="text-decoration:none; font-size:12px; padding:6px 12px; background:#3c763d; color:white;">Finished</a>
                    </td>
                </tr>
            `;
        });
        if (orders.length === 0) {
            staffHTML += `<tr><td colspan="6" style="text-align:center; padding:30px; color:var(--text-muted-light); font-style:italic;">No active kitchen orders found.</td></tr>`;
        }
        staffHTML += `
                            </tbody>
                        </table>
                    </div>
                </div>
            </body>
            </html>
        `;
        res.send(staffHTML);
    } catch(err) { res.status(500).send(err.message); }
});

app.get('/staff/orders/update/:id/:status', requireAuth, requireStaff, async (req, res) => {
    try {
        await dbPool.query('UPDATE orders SET status = ? WHERE id = ?', [req.params.status, req.params.id]);
        res.redirect('/staff/dashboard');
    } catch (err) { res.status(500).send(err.message); }
});

app.post('/shop/checkout', requireAuth, async (req, res) => {
    const { summary, price, receiptText } = req.body;
    try {
        await dbPool.query(
            'INSERT INTO orders (customer_id, customer_name, items_summary, total_price, status, receipt_blob) VALUES (?, ?, ?, ?, "Pending", ?)',
            [req.session.user.id, req.session.user.username, summary, price, receiptText]
        );
        res.sendStatus(200);
    } catch(e) { res.status(500).send(e.message); }
});

app.get('/shop/receipt/download/:id', requireAuth, async (req, res) => {
    try {
        let rows;
        if (req.session.user.role === 'staff') {
            [rows] = await dbPool.query('SELECT receipt_blob FROM orders WHERE id = ?', [req.params.id]);
        } else {
            [rows] = await dbPool.query('SELECT receipt_blob FROM orders WHERE id = ? AND customer_id = ?', [req.params.id, req.session.user.id]);
        }
        
        if (rows.length === 0 || !rows[0].receipt_blob) {
            return res.status(404).send('Receipt document text data unavailable for this selection.');
        }
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Disposition', `attachment; filename=Swiggy_Brrgrr_Receipt_00${req.params.id}.txt`);
        res.send(rows[0].receipt_blob);
    } catch(e) { res.status(500).send(e.message); }
});

app.get('/shop/orders-stream', requireAuth, async (req, res) => {
    try {
        let rows;
        if(req.session.user.role === 'staff') {
            [rows] = await dbPool.query('SELECT id, customer_name, items_summary, total_price, status FROM orders ORDER BY order_date DESC LIMIT 15');
        } else {
            [rows] = await dbPool.query('SELECT id, customer_name, items_summary, total_price, status FROM orders WHERE customer_id = ? ORDER BY order_date DESC LIMIT 15', [req.session.user.id]);
        }
        res.json(rows);
    } catch(e) { res.status(500).send(e.message); }
});

app.get('/api/posts', requireAuth, async (req, res) => {
    const searchString = req.query.search || '';
    const currentUsername = req.session.user.username;
    const currentUserRole = req.session.user.role;
    try {
        let sqlQuery = `SELECT posts.*, users.username FROM posts JOIN users ON posts.author_id = users.id`;
        let queryParams = [];
        if (searchString) {
            sqlQuery += ` WHERE posts.title LIKE ? OR posts.content LIKE ?`;
            queryParams.push(`%${searchString}%`, `%${searchString}%`);
        }
        sqlQuery += ` ORDER BY posts.created_at DESC`;

        const [dataset] = await dbPool.query(sqlQuery, queryParams);
        const postsArray = dataset.map(p => new Post(p.id, p.title, p.content, p.author_id, p.created_at, p.username));

        let blogHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Community Journal Portal</title>
                <link rel="stylesheet" href="/style.css">
                <style>
                    .blog-form-row { display: grid; grid-template-columns: 1fr; gap: 15px; margin-top: 15px; }
                    .blog-input-node { width: 100%; padding: 12px; border: 1px solid var(--border-light); background: var(--bg-light); color: var(--text-main-light); border-radius: 8px; font-family: inherit; box-sizing: border-box; font-weight: 600; }
                    .blog-input-node:focus { outline: none; border-color: var(--primary-neon); }
                    .blog-post-card { background: var(--card-light); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 20px; margin-bottom: 20px; box-shadow: var(--shadow-light); position: relative; }
                    .blog-meta-info { font-size: 0.88em; color: var(--text-muted-light); font-weight: 600; margin-bottom: 12px; display: flex; justify-content: space-between; }
                </style>
                <script>
                    function syncBlogTheme() {
                        const isDark = localStorage.getItem('blog-dark-mode') === 'true';
                        if (isDark) {
                            document.documentElement.setAttribute('data-theme', 'dark');
                            document.getElementById('checkbox-theme-toggle').checked = true;
                            document.getElementById('theme-mode-label').innerText = "Dark Mode Active";
                        }
                    }
                    function toggleBlogTheme() {
                        const cb = document.getElementById('checkbox-theme-toggle');
                        if (cb.checked) {
                            document.documentElement.setAttribute('data-theme', 'dark');
                            localStorage.setItem('blog-dark-mode', 'true');
                            document.getElementById('theme-mode-label').innerText = "Dark Mode Active";
                        } else {
                            document.documentElement.setAttribute('data-theme', 'light');
                            localStorage.setItem('blog-dark-mode', 'false');
                            document.getElementById('theme-mode-label').innerText = "Light Mode Active";
                        }
                    }
                    window.onload = syncBlogTheme;
                </script>
            </head>
            <body>
                <div class="portal-utility-header">
                    <div class="theme-switch-wrapper">
                        <label class="theme-switch" for="checkbox-theme-toggle">
                            <input type="checkbox" id="checkbox-theme-toggle" onclick="toggleBlogTheme()">
                            <span class="slider"></span>
                        </label>
                        <span id="theme-mode-label" style="font-size: 0.85em; font-weight: 700; color: var(--text-muted-light);">Light Mode</span>
                    </div>
                    <div class="top-right-nav-menu">
                        <a href="${currentUserRole === 'staff' ? '/staff/dashboard' : '/customer/dashboard'}" class="tab-pill" style="text-decoration:none;"> Return to Store Station</a>
                        <a href="/api/posts/download" class="tab-pill active" style="text-decoration:none; background: #10b981; color: white;"> Export Backup (.xlsx)</a>
                        <a href="/auth/logout" class="tab-pill" style="text-decoration:none; background: var(--text-muted-light); color: #fff;">Disconnect</a>
                    </div>
                </div>

                <div id="main-wrapper" style="max-width: 850px; margin: 30px auto;">
                    <div id="brand-header">
                        <h1>Community Post Archives</h1>
                        <p class="subtitle">Logged in Operator Identity: <strong style="color: var(--primary-neon); font-size:1.1em;">${currentUsername}</strong> (${currentUserRole.toUpperCase()})</p>
                    </div>

                    <div class="portal-section-card">
                        <h3 style="margin-top:0; color: var(--primary-neon); font-weight:800;">Compose New Journal Entry</h3>
                        <form action="/api/posts/create" method="POST" class="blog-form-row">
                            <div>
                                <label style="font-weight:700; font-size:0.9em;">Article Title Header:</label>
                                <input type="text" name="title" class="blog-input-node" placeholder="Specify post title..." required>
                            </div>
                            <div>
                                <label style="font-weight:700; font-size:0.9em;">Content Body Document Block:</label>
                                <textarea name="content" class="blog-input-node" style="height:120px; resize: vertical;" placeholder="Type content records here..." required></textarea>
                            </div>
                            <button type="submit" class="btn-action-main" style="border-radius:8px; padding:12px;">Publish Article to Feed</button>
                        </form>
                    </div>

                    <div class="portal-section-card" style="padding: 20px;">
                        <h3 style="margin-top:0; font-weight:800;">Search Post Database</h3>
                        <form action="/api/posts" method="GET" style="display:flex; gap:10px;">
                            <input type="text" name="search" class="blog-input-node" style="margin:0;" placeholder="Type indexing query markers..." value="${searchString}">
                            <button type="submit" class="btn-action-main" style="border-radius:8px; white-space:nowrap;">Run Query</button>
                        </form>
                    </div>

                    <h2 style="color: var(--text-main-light); font-weight:800; margin-bottom:20px;">Archived Feed Directory</h2>
        `;

        if(postsArray.length === 0) {
            blogHTML += `<div class="portal-section-card" style="text-align:center; font-style:italic; color:var(--text-muted-light);">No archive matches identified.</div>`;
        }

        postsArray.forEach(p => {
            blogHTML += `
                <div class="blog-post-card">
                    <div class="blog-meta-info">
                        <span>Logged By Account: <strong style="color:var(--text-main-light); font-size:1.05em;">${p.authorName}</strong></span>
                        <span>Date Stamp: ${p.createdAt.toLocaleString()}</span>
                    </div>
                    <h3 style="margin: 0 0 10px 0; font-weight:800; color:var(--text-main-light);">${p.title}</h3>
                    <p style="line-height:1.6; color:var(--text-main-light); margin:0; font-weight:500;">${p.content}</p>
            `;
            if(req.session.user.id === p.authorId || currentUserRole === 'staff') {
                blogHTML += `
                    <div style="text-align:right; margin-top:15px; border-top:1px dashed var(--border-light); padding-top:10px;">
                        <a href="/api/posts/delete/${p.id}" style="color:#ff1e46; font-weight:700; text-decoration:none; font-size:0.9em;" onclick="return confirm('Purge this record item completely?')">[Purge Entry]</a>
                    </div>
                `;
            }
            blogHTML += `</div>`;
        });

        blogHTML += `</div></body></html>`;
        res.send(blogHTML);
    } catch(e) { res.status(500).send(e.message); }
});

app.post('/api/posts/create', requireAuth, async (req, res) => {
    try {
        await dbPool.query('INSERT INTO posts (title, content, author_id) VALUES (?, ?, ?)', [req.body.title, req.body.content, req.session.user.id]);
        res.redirect('/api/posts');
    } catch(e) { res.status(500).send(e.message); }
});

app.get('/api/posts/delete/:id', requireAuth, async (req, res) => {
    try {
        const [postCheck] = await dbPool.query('SELECT author_id FROM posts WHERE id = ?', [req.params.id]);
        if (postCheck.length === 0) return res.status(404).send('Record not found.');
        
        if (req.session.user.role !== 'staff' && postCheck[0].author_id !== req.session.user.id) {
            return res.status(403).send('Unauthorized deletion attempt payload rejected.');
        }

        await dbPool.query('DELETE FROM posts WHERE id = ?', [req.params.id]);
        res.redirect('/api/posts');
    } catch(e) { res.status(500).send(e.message); }
});

app.get('/api/posts/download', requireAuth, async (req, res) => {
    try {
        const [rows] = await dbPool.query('SELECT id, title, content, created_at FROM posts');
        const ws = XLSX.utils.json_to_sheet(rows);
        const wb = XLSX.utils.book_new();
        Xxlsx.utils.book_append_sheet(wb, ws, "Blog Archives");
        const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=System_Archive_Data_Dump.xlsx');
        res.send(buf);
    } catch (err) { res.status(500).send(err.message); }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => console.log('Unified Server active on http://localhost:3000/login.html'));