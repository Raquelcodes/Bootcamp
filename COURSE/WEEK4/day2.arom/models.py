import json

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=True)
    posts = relationship("Post")

    def __str__(self):
        return self.username


class UserSerializer:
    @staticmethod
    def serialize(user, many=False):
        if many:
            res = []
            for user in user:
                user_dict = {
                    'username': user.username,
                    'email': user.email
                }
                res += [user_dict]
            return json.dumps(res)
        user_dict = {
            'username': user.username,
            'email': user.email
        }
        return json.dumps(user_dict)

    @staticmethod
    def desirialize(data):
        user_dict = json.loads(data)
        new_user = User(**user_dict)
        return new_user

    @staticmethod
    def save(user):
        db.session.add(user)
        db.session.commit()


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
