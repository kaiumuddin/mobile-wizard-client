import React from 'react';

const Blog = () => {

    return (
        <div className="container my-24 px-6 mx-auto">
            <section className="mb-32 text-gray-800">
                <div className="grid md:grid-cols-1 gap-4">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold mb-6">Blogs</h2>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <p className="font-bold mb-4 text-xl">Difference between SQL and NoSQL</p>
                        <div className="text-gray-500 mb-12">
                            <ol className="list-decimal list-inside">
                                <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                                <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                                <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                                <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                                <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <p className="font-bold mb-4 text-xl">What is JWT, and how does it work?</p>
                        <div className="text-gray-500 mb-12">
                            <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                                It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                                The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                                JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
                            <p className="mt-2">Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                        </div>
                    </div>


                    <div className="mb-6 md:mb-0">
                        <p className="font-bold mb-4 text-xl">What is the difference between javascript and NodeJS?</p>
                        <div className="text-gray-500 mb-12">
                            <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <p className="font-bold mb-4 text-xl">How does NodeJS handle multiple requests at the same time?</p>
                        <div className="text-gray-500 mb-12">
                            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;