import click
from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
from models import *

import views
from urls import posts_urls
import datetime


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app_db.sqlite'

migrate = Migrate(app, db)
db.init_app(app)
db.create_all(app=app)

#click command to initialize the database
@app.cli.command()
def generatedata():
    db.create_all(app=app)
    for i in range(10):
        user = User(id=f'id{i}', username=f'test_user{i}')
        #for z in range(10):
         #   user= User(created=f'test{z}', due_date=f'duedate{z}', done_flag=f'doneflag{z}', posts=f'Post {z}')
           # for j in range(10):
            #    post = Post(user=user, body=f'Post {j}')
             #   user.posts.append(post)

        db.session.add(user)
    db.session.commit()
    click.echo('Init db done!')


app.add_url_rule('/users/', view_func=views.users, methods=['GET', 'POST'])
app.register_blueprint(posts_urls, url_prefix='/posts' )

if __name__ == '__main__':
    app.run(host='localhost', port=6000, debug=True)

