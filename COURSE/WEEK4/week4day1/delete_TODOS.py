import sqlite3
conn = sqlite3.connect('./TODOapp.sqlite')
c = conn.cursor()


def delete_TODO():
    user_delete = str(input("type the item you want to delete"))
    sql= f'''
    DELETE FROM app
    WHERE content == "{user_delete}"
    '''

    c.execute(sql)
    conn.commit()

#print(delete_TODO())