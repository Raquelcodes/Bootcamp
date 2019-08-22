import sqlite3
conn = sqlite3.connect('./TODOapp.sqlite')
c = conn.cursor()

import datetime

def create_new_todo():
    user_add = str(input("what do you want to add?"))


    timestamp = datetime.datetime.now().strftime('%Y/%m/%d  %H:%M:%S')

    print(timestamp)

    sql= f'''
            INSERT INTO app
                (content, created)
            VALUES
                ("{user_add}", "{timestamp}");
            '''

    c.execute(sql)
    conn.commit()
    conn.close()

#print(create_new_todo())

