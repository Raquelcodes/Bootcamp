import sqlite3
conn = sqlite3.connect('./TODOapp.sqlite')
c = conn.cursor()


def search():

    user_search = str(input("type the item ID you want to look up"))



    sql = f'''
            SELECT
                todo_id, content, created
            FROM
                app
            WHERE
                todo_id == "{user_search}"
            '''



    c.execute(sql)


    row = c.fetchone()

    print("The TODO you selected is:", row)

