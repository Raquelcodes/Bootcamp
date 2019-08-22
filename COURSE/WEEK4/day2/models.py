import json

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

db = SQLAlchemy()

import datetime



class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    #email = db.Column(db.String(120), unique=True, nullable=True)

    def __str__(self):
        return self.username


"""
#class lists
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    #user_lists=relationship("User")

    

#each user list
class User_lists(db.Model):
    created = db.Column(db.String(80), unique=True, nullable=False)
    due_date = db.Column(db.String(80), unique=False, nullable=True)
    done_flag = db.Column(db.String(80), unique=False, nullable=False)
    posts = db.Column(db.String(80), unique=False, nullable=False)
    #posts=TODOs


"""



#serialize for GET method
class UserSerializer:
    @staticmethod
    def serialize(user, many=False):
        if many:
            res = []
            for user in user:
                user_dict = {
                    'id': user.id,
                    'username': user.username
                }
                res += [user_dict]
            return json.dumps(res)
        user_dict = {
            'id': user.id,
            'username': user.username

        }
        return json.dumps(user_dict)


#deserialize for POST method
    @staticmethod
    def desirialize(data):
        user_dict = json.loads(data)
        new_user = User(**user_dict)
        return new_user

#to commit each row to the table
    @staticmethod
    def save(user):
        db.session.add(user)
        db.session.commit()



#to allocate each post of a user to that user id
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(
        db.Integer,
        db.ForeignKey('user.id'),
        nullable=False,
    )
    body = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f'<Post {self.title}>'
"""
#to GET the posts, ie the TODOs for each user
class PostSerializer:
    @staticmethod
    def serialize(post, many=False):
        if many:
            res = []
            for post in post:
                user_dict = {
                    'user': post.user,
                    'body': post.body
                }
                res += [user_dict]
            return json.dumps(res)
        user_dict = {
            'user': post.user,
            'body': post.body
        }
        return json.dumps(user_dict)
"""