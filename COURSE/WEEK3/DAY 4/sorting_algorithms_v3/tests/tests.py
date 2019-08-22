import unittest
from unittest import TestCase

import sorting_algorithms_v3



class TestSorting1(TestCase):
    def test_is_Sorted(self):
        s = [1,4,3,2]
        t = sorting_algorithms_v3.bubbleSort(s)
        self.assertEqual(t, [1,2,3,4])

class TestSorting2(TestCase):
    def test_is_Sorted(self):
        s = [1, 4, 3, 2]
        self.assertEqual(sorting_algorithms_v3.selectionSort(s), [1, 2, 3, 4])

class TestSorting3(TestCase):
    def test_is_Sorted(self):
        s = [1, 4, 3, 2]
        self.assertEqual(sorting_algorithms_v3.insertionSort(s), [1, 2, 3, 4])

class TestSorting4(TestCase):
    def test_is_Sorted(self):
        s = [1, 4, 3, 2]
        self.assertEqual(sorting_algorithms_v3.quick_sort(s), [1, 2, 3, 4])


if __name__ == '__main__':
    unittest.main()
