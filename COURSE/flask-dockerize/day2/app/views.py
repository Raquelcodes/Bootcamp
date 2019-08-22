import json
from flask import request
from flask.views import MethodView

from models import User, UserSerializer, Post, PostSerializer


def users():
    if request.method == 'GET':
        users = User.query.all()
        return UserSerializer.serialize(users, many=True)
    if request.method == 'POST':
        new_user = UserSerializer.desirialize(request.data)
        UserSerializer.save(new_user)
        return '', 201


def get_posts_user(user_id):
    if request.method == 'GET':
        posts = Post.query.filter_by(user=user_id)
        return PostSerializer.serialize(posts, many=True)


# class Users(MethodView):
#     def get(self):
#         users = User.query.all()
#         return UserSerializer.serialize(users, many=True)
#
#     def post(self):
#         pass
