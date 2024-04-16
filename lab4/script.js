const SortingLibrary = {
    // Метод сортування обміну
    exchangeSort: function(arr, sortOrder = 'asc') {
        let comparisons = 0;
        let swaps = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] !== undefined && arr[j] !== undefined) {
                    if (arr[i] > arr[j] && sortOrder === 'asc') {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                        swaps++;
                    } else if (arr[i] < arr[j] && sortOrder === 'desc') {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                        swaps++;
                    }
                    comparisons++;
                }
            }
        }

        console.log(`Comparisons: ${comparisons}, Swaps: ${swaps}`);
        return arr;
    },

    // Метод сортування мінімальних елементів
    selectionSort: function(arr, sortOrder = 'asc') {
        let comparisons = 0;
        let swaps = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] !== undefined && arr[j] !== undefined) {
                    if ((arr[j] < arr[minIndex] && sortOrder === 'asc') || (arr[j] > arr[minIndex] && sortOrder === 'desc')) {
                        minIndex = j;
                    }
                    comparisons++;
                }
            }
            if (i !== minIndex) {
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
                swaps++;
            }
        }

        console.log(`Comparisons: ${comparisons}, Swaps: ${swaps}`);
        return arr;
    },

    // Метод сортування вставками
    insertionSort: function(arr, sortOrder = 'asc') {
        let comparisons = 0;
        let swaps = 0;
    
        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;
            while (j >= 0 && ((arr[j] === undefined) || (arr[j] !== undefined && ((arr[j] > current && sortOrder === 'asc') || (arr[j] < current && sortOrder === 'desc'))))) {
                arr[j + 1] = arr[j];
                swaps++;
                comparisons++;
                j--;
            }
            arr[j + 1] = current;
            comparisons++;
        }
    
        console.log(`Comparisons: ${comparisons}, Swaps: ${swaps}`);
        return arr;
    },

    // Метод сортування Шелла
    shellSort: function(arr, sortOrder = 'asc') {
        let comparisons = 0;
        let swaps = 0;
        const n = arr.length;
    
        // Компаратор, який ігнорує undefined значення
        const customComparator = (a, b) => {
            if (a === undefined) return sortOrder === 'asc' ? 1 : -1;
            if (b === undefined) return sortOrder === 'asc' ? -1 : 1;
            return sortOrder === 'asc' ? a - b : b - a;
        };
    
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = arr[i];
                let j = i;
    
                while (j >= gap && customComparator(arr[j - gap], temp) > 0) {
                    arr[j] = arr[j - gap];
                    swaps++;
                    comparisons++;
                    j -= gap;
                }
    
                arr[j] = temp;
                comparisons++;
            }
        }
    
        console.log(`Comparisons: ${comparisons}, Swaps: ${swaps}`);
        return arr;
    },

    // Метод швидкого сортування (Хоара)
    quickSort: function(arr, sortOrder = 'asc') {
        let comparisons = 0;
        let swaps = 0;

        const partition = (arr, low, high) => {
            let pivot = arr[Math.floor((low + high) / 2)];
            let i = low;
            let j = high;
        
            while (i <= j) {
                if (sortOrder === 'asc') {
                    while (arr[i] !== undefined && arr[i] < pivot) {
                        i++;
                        comparisons++;
                    }
                    while (arr[j] !== undefined && arr[j] > pivot) {
                        j--;
                        comparisons++;
                    }
                } else {
                    while (arr[i] !== undefined && arr[i] > pivot) {
                        i++;
                        comparisons++;
                    }
                    while (arr[j] !== undefined && arr[j] < pivot) {
                        j--;
                        comparisons++;
                    }
                }
        
                if (i <= j) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    swaps++;
                    i++;
                    j--;
                }
            }
        
            return i;
        };


        const quickSortRecursive = (arr, low, high) => {
            if (arr.length > 1) {
                let index = partition(arr, low, high);

                if (low < index - 1) {
                    quickSortRecursive(arr, low, index - 1);
                }
                if (index < high) {
                    quickSortRecursive(arr, index, high);
                }
            }
        };

        quickSortRecursive(arr, 0, arr.length - 1);

        console.log(`Comparisons: ${comparisons}, Swaps: ${swaps}`);
        return arr;
    }
};
