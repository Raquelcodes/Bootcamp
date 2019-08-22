from setuptools import setup

def readme():
    with open('README.rst') as f:
        return f.read()

setup(name='sorting_algorithms_v3',
      version='0.1',
      description='sorting algorithms in python3',
      url='https://gitlab.propulsion-home.ch/',
      author='Raquelcodes',
      author_email='Raquelcodes@example.com',
      license='MIT',
      packages=['sorting_algorithms_v3'],
      test_suite='nose.collector',
      tests_require=['nose'],
      zip_safe=False)