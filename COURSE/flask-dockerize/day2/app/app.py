import click
from flask import Flask
from flask_migrate import Migrate

from models import db, User, Post

import views
from urls import posts_urls

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app_db.sqlite'

migrate = Migrate(app, db)

db.app=app

db.init_app(app)
db.create_all(app=app)


@app.cli.command()
def generatedata():
    db.create_all(app=app)
    for i in range(10):
        user = User(username=f'test_user{i}', email=f'test_user{i}@email.com')
        for j in range(10):
            post = Post(user=user, body=f'Post {j} by user {user.username}')
            user.posts.append(post)

        db.session.add(user)
    db.session.commit()
    click.echo('Init db done!')


app.add_url_rule('/users/', view_func=views.users, methods=['GET', 'POST'])
app.register_blueprint(posts_urls, url_prefix='/posts' )

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
