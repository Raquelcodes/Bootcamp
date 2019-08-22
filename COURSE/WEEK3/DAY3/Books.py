
class Bookshelf:
    def __init__(self, books):
        self.books=books
        self.book_storage = []
        self.add_book()
    #method to add books to bookshelf (book_storage)
    def add_book(self):
           for x,y in self.books:
               self.book_storage.append(Book(x,y))
           for book in self.book_storage:
                print (book)

class Book:
         def __init__(self,title,author):
            self.title=title
            self.author = author

         def __str__(self):
            return f"{self.title} by {self.author}"

#book1=Book("title1", "author1")
#print(book1)
book_shelf=Bookshelf(books=[('The old man and the see', 'Ernest Hemingway'),
    ('Beyond Good and Evil', 'Friedrich Nietzsche'),])
#print(book_shelf)
