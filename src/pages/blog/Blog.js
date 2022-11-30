import React from 'react';

const Blog = () => {

    return (
        <div className="container my-24 px-6 mx-auto">
            <section className="mb-32 text-gray-800 dark:text-white">
                <div className="grid md:grid-cols-1 gap-4">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold mb-6">Blogs</h2>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <p className="font-bold mb-4 text-xl">What are the different ways to manage a state in a React application?</p>
                        <div className="text-gray-800 dark:text-white mb-12">
                            <ol className="list-decimal list-inside">
                                <li>Local state.</li>
                                <li>Global state.</li>
                                <li>Server state.</li>
                                <li>URL state.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <p className="font-bold mb-4 text-xl">How does prototypical inheritance work?</p>
                        <div className="text-gray-800 dark:text-white mb-12">
                            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

                        </div>
                    </div>


                    <div className="mb-6 md:mb-0">
                        <p className="font-bold mb-4 text-xl">What is a unit test? Why should we write unit tests?</p>
                        <div className="text-gray-800 dark:text-white mb-12">
                            <p>
                                The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <p className="font-bold mb-4 text-xl">React vs. Angular vs. Vue?</p>
                        <div className="text-gray-800 dark:text-white mb-12">
                            <p>React</p>
                            <li>Component model</li>
                            <li>Virtual DOM</li>
                            <li>One-way data binding</li>
                            <li>Native mobile development framework</li>
                            <li>Big community</li>
                        </div>
                        <div className="text-gray-800 dark:text-white mb-12">
                            <p>Angular</p>
                            <li>Angular templates</li>
                            <li>Simple implementation of two-way data binding</li>
                            <li>Big community</li>
                        </div>
                        <div className="text-gray-800 dark:text-white mb-12">
                            <p>Vue</p>
                            <li>MVC framework</li>
                            <li>Lightweight solution</li>
                            <li>Virtual DOM</li>
                            <li>Declarative templatesy</li>
                            <li>Two-way data binding</li>
                            <li>Pure JavaScript</li>
                            <li>Rising popularity</li>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;