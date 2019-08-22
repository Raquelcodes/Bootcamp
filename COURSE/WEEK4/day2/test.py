from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'




import click

# ...

@app.cli.command()
def initdb():
    """Initialize the database."""
    db.create_all()
    click.echo('Init db done!')
