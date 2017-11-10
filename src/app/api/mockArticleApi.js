import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const articles = [
    {
        id:"1",
        breadcrumb: "react-flux-building-applications",
        Title: "Building Applications in React and Flux",
        Url: "http://www.pluralsight.com/courses/react-flux-building-applications",
        Author: "cory-house",
        length: "5:08",
        Categories: "1",
        Tags: "LATEST POST",
        Featured_Image:"https://a10.gaanacdn.com/images/albums/18/280718/crop_175x175_280718.jpg",
        Content:"Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula, lacus justo semper libero, quis porttitor turpis odio sit amet ligula. Duis dapibus fermentum orci, nec malesuada libero vehicula ut. Integer sodales, urna eget interdum eleifend, nulla nibh laoreet nisl, quis dignissim mauris dolor eget mi. Donec at mauris enim. Duis nisi tellus, adipiscing a convallis quis, tristique vitae risus. Nullam molestie gravida lobortis. Proin ut nibh quis felis auctor ornare. Cras ultricies, nibh at mollis faucibus, justo eros porttitor mi, quis auctor lectus arcu sit amet nunc. Vivamus gravida vehicula arcu, vitae vulputate augue lacinia faucibus."
    },
    {
        id:"2",
        breadcrumb: "clean-code",
        Title: "Clean Code: Writing Code for Humans",
        Url: "http://www.pluralsight.com/courses/writing-clean-code-humans",
        Author: "cory-house",
        Categories: "2",
        Tags: "LATEST POST",
        Featured_Image:"https://a10.gaanacdn.com/images/albums/18/280718/crop_175x175_280718.jpg",
        Content:"Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula, lacus justo semper libero, quis porttitor turpis odio sit amet ligula. Duis dapibus fermentum orci, nec malesuada libero vehicula ut. Integer sodales, urna eget interdum eleifend, nulla nibh laoreet nisl, quis dignissim mauris dolor eget mi. Donec at mauris enim. Duis nisi tellus, adipiscing a convallis quis, tristique vitae risus. Nullam molestie gravida lobortis. Proin ut nibh quis felis auctor ornare. Cras ultricies, nibh at mollis faucibus, justo eros porttitor mi, quis auctor lectus arcu sit amet nunc. Vivamus gravida vehicula arcu, vitae vulputate augue lacinia faucibus."
    },
    {
        id:"2",
        breadcrumb: "architecture",
        Title: "Architecting Applications for the Real World",
        Url: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
        Author: "cory-house",
        Categories: "3",
        Tags: "LATEST POST",
        Featured_Image:"https://a10.gaanacdn.com/images/albums/18/280718/crop_175x175_280718.jpg",
        Content:"Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula, lacus justo semper libero, quis porttitor turpis odio sit amet ligula. Duis dapibus fermentum orci, nec malesuada libero vehicula ut. Integer sodales, urna eget interdum eleifend, nulla nibh laoreet nisl, quis dignissim mauris dolor eget mi. Donec at mauris enim. Duis nisi tellus, adipiscing a convallis quis, tristique vitae risus. Nullam molestie gravida lobortis. Proin ut nibh quis felis auctor ornare. Cras ultricies, nibh at mollis faucibus, justo eros porttitor mi, quis auctor lectus arcu sit amet nunc. Vivamus gravida vehicula arcu, vitae vulputate augue lacinia faucibus."
    },
    {
        id:"3",
        breadcrumb: "career-reboot-for-developer-mind",
        Title: "Becoming an Outlier: Reprogramming the Developer Mind",
        Url: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
        Author: "cory-house",
        Categories: "4",
        Tags: "LATEST POST",
        Featured_Image:"https://a10.gaanacdn.com/images/albums/18/280718/crop_175x175_280718.jpg",
        Content:"Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula, lacus justo semper libero, quis porttitor turpis odio sit amet ligula. Duis dapibus fermentum orci, nec malesuada libero vehicula ut. Integer sodales, urna eget interdum eleifend, nulla nibh laoreet nisl, quis dignissim mauris dolor eget mi. Donec at mauris enim. Duis nisi tellus, adipiscing a convallis quis, tristique vitae risus. Nullam molestie gravida lobortis. Proin ut nibh quis felis auctor ornare. Cras ultricies, nibh at mollis faucibus, justo eros porttitor mi, quis auctor lectus arcu sit amet nunc. Vivamus gravida vehicula arcu, vitae vulputate augue lacinia faucibus."
    },
    {
        id:"4",
        breadcrumb: "web-components-shadow-dom",
        Title: "Web Component Fundamentals",
        Url: "http://www.pluralsight.com/courses/web-components-shadow-dom",
        Author: "cory-house",
        Categories: "4",
        Tags: "LATEST POST",
        Featured_Image:"https://a10.gaanacdn.com/images/albums/18/280718/crop_175x175_280718.jpg",
        Content:"Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula, lacus justo semper libero, quis porttitor turpis odio sit amet ligula. Duis dapibus fermentum orci, nec malesuada libero vehicula ut. Integer sodales, urna eget interdum eleifend, nulla nibh laoreet nisl, quis dignissim mauris dolor eget mi. Donec at mauris enim. Duis nisi tellus, adipiscing a convallis quis, tristique vitae risus. Nullam molestie gravida lobortis. Proin ut nibh quis felis auctor ornare. Cras ultricies, nibh at mollis faucibus, justo eros porttitor mi, quis auctor lectus arcu sit amet nunc. Vivamus gravida vehicula arcu, vitae vulputate augue lacinia faucibus."
    }
];

const articleCategory = [
    {
        id:"1",
        title: "Category-1",
        Categories: "1"
    },
    {
        id:"2",
        title: "Category-2",
        Categories: "2"
    },
    {
        id:"3",
        title: "Category-3",
        Categories: "3"
    },
    {
        id:"4",
        title: "Category-4",
        Categories: "4"
    }
];

class ArticlesApi {
    static getAllArticles() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], articles));
            }, delay);
        });
    }

    static getAllCategories() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], articleCategory));
            }, delay);
        });
    }
}

export default ArticlesApi;
