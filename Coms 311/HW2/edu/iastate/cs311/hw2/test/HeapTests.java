package edu.iastate.cs311.hw2.test;
import edu.iastate.cs311.hw2.Heap;
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class HeapTests {


    @Test
    public void percolateUpTest() {
        Heap<Integer> pq = new Heap<>();
        pq.add(1);
        pq.add(5);
        pq.add(7);
        pq.add(3);
        pq.add(2);

        ArrayList<Integer> key = pq.HeapAsArray();
        ArrayList<Integer> expected = new ArrayList<>();

        expected.add(1);
        expected.add(2);
        expected.add(7);
        expected.add(5);
        expected.add(3);

        Assert.assertArrayEquals(key.toArray(), expected.toArray());
    }

    @Test
    public void getLastInternalTest() {
        Heap<Integer> pq = new Heap<>();
        int size = 6;
        for(int i = 0; i < size; i++) {
            pq.add(i);
        }
        Assert.assertEquals(pq.HeapAsArray().get(pq.size()/2 - 1), pq.getLastInternal());
    }

    @Test
    public void trimEveryLeafTest() {
        Heap<Integer> pq = new Heap<>();
        int sizeOfHeap = 6;
        for(int i = 0; i <= sizeOfHeap; i++) {
            pq.add(i);
        }
        pq.trimEveryLeaf();
        ArrayList<Integer> expected = new ArrayList<>();
        expected.add(0);
        expected.add(1);
        expected.add(2);

        Assert.assertArrayEquals(expected.toArray(), pq.HeapAsArray().toArray());

        Heap<Integer> q = new Heap<>();

        for(int i = sizeOfHeap; i >= 0; i--) {
            q.add(i);
        }
        expected.clear();
        expected.add(0);
        expected.add(3);
        expected.add(1);
        q.trimEveryLeaf();
        Assert.assertArrayEquals(expected.toArray(), q.HeapAsArray().toArray());

    }

    @Test
    public void percolateDownTest() {
        Heap<Integer> pq = new Heap<>();
        int sizeOfHeap = 6;
        for(int i = 0; i < sizeOfHeap; i++) {
            pq.add(i);
        }
        pq.removeMin();
        pq.removeMin();

        ArrayList<Integer> expected = new ArrayList<>();
        expected.add(2);
        expected.add(3);
        expected.add(4);
        expected.add(5);
        Assert.assertArrayEquals(expected.toArray(), pq.HeapAsArray().toArray());

        pq.add(0);
        expected.clear();
        expected.add(0);
        expected.add(2);
        expected.add(4);
        expected.add(5);
        expected.add(3);

        Assert.assertArrayEquals(expected.toArray(), pq.HeapAsArray().toArray());

    }
}