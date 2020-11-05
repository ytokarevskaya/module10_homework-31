let myMap = new Map();
myMap.set('key', 'prop');
myMap.set(1, 'prop2');
myMap.set(true, 123);       

 for(const [key, value] of myMap) {
    console.log(`Ключ — ${key}; Значение — ${value}`);
	}
