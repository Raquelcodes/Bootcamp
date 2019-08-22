# Flask Live coding

## Flask migrate

Install:

```bash
pip install Flask-Migrate
```

**Note**: Make sure you have the FLASK_APP env variable exported before you run these commands!

Generate migration folder structure:

```bash
flask db init
```

Create first migration file:

```bash
flask db migrate
```

Apply schema changes to database:

```bash
flask db upgrade
```
