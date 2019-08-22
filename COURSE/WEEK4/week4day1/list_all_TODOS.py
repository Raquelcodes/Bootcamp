
import sqlite3
conn = sqlite3.connect('./TODOapp.sqlite')
c = conn.cursor()

def list_all():


    sql = f'''
        SELECT
        *
        FROM
        app
        ORDER BY
        created ASC
        ;'''

    c.execute(sql)

    all_rows = c.fetchall()
    print("Current TODOs: ")
    for row in all_rows:
        print(row)
#print (list_all())