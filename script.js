function checkIndex(index) {
  if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bound");
  }
}

//1.
function hashMap() {
  let buckets = [];
  buckets.length = 16;

  //2.
  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % buckets.length;
  }
  //3.
  function set(key, value) {
    const hashCode = hash(key);

    console.log(hashCode);

    const newNode = {
      key: key,
      value: value,
      next: null,
    };

    temp = buckets[hashCode];

    //   Add head
    if (!buckets[hashCode]) {
      buckets[hashCode] = newNode;
      console.log(buckets[hashCode]);
      console.log(buckets);
      return;
    }

    //   Check nodes to replace key.
    while (temp) {
      if (temp.key === newNode.key) {
        temp.value = newNode.value;
        return;
      }

      // Append node to end of linked list
      if (!temp.next) {
        temp.next = newNode;
        return;
      }

      temp = temp.next;
    }

    return;
  }

  //4.
  function get(key) {
    const hashCode = hash(key);

    temp = buckets[hashCode];

    while (temp) {
      if (temp.key === key) {
        return temp.value;
      }

      temp = temp.next;
    }

    return null;
  }

  //5.
  function has(key) {
    const hashCode = hash(key);

    temp = buckets[hashCode];

    while (temp) {
      if (temp.key === key) {
        return true;
      }

      temp = temp.next;
    }

    return false;
  }

  //6.
  function remove(key) {
    const hashCode = hash(key);

    temp = buckets[hashCode];

    if (!temp) {
      return false;
    }

    if (temp.key === key) {
      buckets[hashCode] = temp.next;
      return buckets[hashCode];
      return true;
    }

    while (temp.next) {
      //   console.log("WORKS");
      if (temp.next.key === key) {
        temp.next = temp.next.next;

        return true;
      }

      temp.next = temp.next.next;
    }

    return false;
  }

  function length() {
    temp = buckets;

    console.log(temp);

    let totalKeys = 0;

    temp.forEach((bucket) => {
      while (bucket) {
        console.log("Incremented");
        totalKeys++;
        bucket = bucket.next;
      }
    });

    return totalKeys;
  }

  function clear() {
    buckets = [];
    buckets.length = 16;
  }

  function keys() {
    temp = buckets;

    const keysCollection = [];

    temp.forEach((bucket) => {
      while (bucket) {
        // console.log(bucket);
        keysCollection.push(bucket.key);

        bucket = bucket.next;
      }
    });

    return keysCollection;
  }

  function values() {
    temp = buckets;

    const valuesCollection = [];

    temp.forEach((bucket) => {
      while (bucket) {
        valuesCollection.push(bucket.value);
        bucket = bucket.next;
      }
    });

    return valuesCollection;
  }

  function entries() {
    temp = buckets;

    const keyValuePairs = [];

    temp.forEach((bucket) => {
      while (bucket) {
        const entry = [];

        entry.push(bucket.key);

        entry.push(bucket.value);

        keyValuePairs.push(entry);

        bucket = bucket.next;
      }
    });

    return keyValuePairs;
  }

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}

const newHashMap = hashMap();
// 3 elements

newHashMap.set("Jack", "Doctor");

newHashMap.set("Jqck", "Teacher");

newHashMap.set("Jill", "Teacher");

newHashMap.set("Jed", "Painter");

newHashMap.set("Joy", "Comedian");

// Overwrite

newHashMap.set("Jack", "Surgeon");

newHashMap.set("Jqck", "Lecturer");

console.log(newHashMap.get("Jqck"));

console.log(newHashMap.get("Jack"));

console.log(newHashMap.get("Jok"));

// console.log(newHashMap.has("Jqck"));

// console.log(newHashMap.has("Jack"));

// console.log(newHashMap.has("Jok"));

console.log("JOK");

console.log(newHashMap.remove("Jok"));

console.log(newHashMap.remove("Jqck"));

console.log(newHashMap.set("Jill", "Tutor"));

console.log(newHashMap.length());

// newHashMap.clear();

// console.log(newHashMap.set("Jill", "Tutor"));

console.log(newHashMap.keys());

console.log(newHashMap.values());

console.log(newHashMap.entries());

console.log("HASHSET");

class HashSet {
  // let buckets = [];
  // buckets.length = 16;

  constructor() {
    this.buckets = [];
    this.buckets.length = 16;
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.buckets.length;
  }

  set(key) {
    // console.log(key);

    // return;
    const hashCode = this.hash(key);

    console.log(hashCode);

    const newNode = {
      key: key,
      next: null,
    };

    temp = this.buckets[hashCode];

    //   Add head
    if (!this.buckets[hashCode]) {
      this.buckets[hashCode] = newNode;
      console.log(this.buckets[hashCode]);
      console.log(this.buckets);
      return;
    }

    //   Check nodes to replace key.
    while (temp) {
      if (temp.key === newNode.key) {
        // temp.value = newNode.value;
        return;
      }

      // Append node to end of linked list
      if (!temp.next) {
        temp.next = newNode;
        return;
      }

      temp = temp.next;
    }

    return;
  }

  // get(key) {
  //   const hashCode = this.hash(key);

  //   temp = this.buckets[hashCode];

  //   while (temp) {
  //     if (temp.key === key) {
  //       return temp.value;
  //     }

  //     temp = temp.next;
  //   }

  //   return null;
  // }

  has(key) {
    const hashCode = this.hash(key);

    temp = this.buckets[hashCode];

    while (temp) {
      if (temp.key === key) {
        return true;
      }

      temp = temp.next;
    }

    return false;
  }

  remove(key) {
    const hashCode = this.hash(key);

    temp = this.buckets[hashCode];

    if (!temp) {
      return false;
    }

    if (temp.key === key) {
      this.buckets[hashCode] = temp.next;
      return this.buckets[hashCode];
      return true;
    }

    while (temp.next) {
      //   console.log("WORKS");
      if (temp.next.key === key) {
        temp.next = temp.next.next;

        return true;
      }

      temp.next = temp.next.next;
    }

    return false;
  }

  length() {
    temp = this.buckets;

    console.log(temp);

    let totalKeys = 0;

    temp.forEach((bucket) => {
      while (bucket) {
        console.log("Incremented");
        totalKeys++;
        bucket = bucket.next;
      }
    });

    return totalKeys;
  }

  clear() {
    this.buckets = [];
    this.buckets.length = 16;
  }

  entries() {
    temp = this.buckets;

    const keysCollection = [];

    temp.forEach((bucket) => {
      while (bucket) {
        // console.log(bucket);
        keysCollection.push(bucket.key);

        bucket = bucket.next;
      }
    });

    return keysCollection;
  }
}

const newSet = new HashSet();

// Add

console.log(newSet.set("Gold"));

console.log(newSet.set("Black"));

console.log(newSet.set("Pink"));

console.log(newSet.set("Blue"));

console.log(newSet.set("blue"));

console.log(newSet.set("BLue"));

// Check

console.log(newSet.has("Goldy"));

// Remove

console.log(newSet.remove("blue"));

// Clear all

console.log(newSet.clear());

// Show all

console.log(newSet.entries());

console.log(newSet.set("Red"));

console.log(newSet.entries());
