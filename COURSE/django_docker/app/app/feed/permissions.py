from rest_framework.permissions import BasePermission

#assures that user is logged in and that user owns the object that he is trying to change OR that user is admin e.g. delete or update a post


class IsOwnerOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if not request.user.is_anonymous and request.user == obj.user or request.user.supersuser:
            return True
        return False
