from flask import Blueprint

import views

posts_urls = Blueprint('posts', 'posts')

posts_urls.add_url_rule('/<int:user_id>/posts/', view_func=views.get_posts_user, methods=['GET'])

