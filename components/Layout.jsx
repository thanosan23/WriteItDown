import Nav from './Nav'
import Head from 'next/head'
import { motion } from 'framer-motion'
import React from 'react';

const Layout = ({router, children}) => {
    return (
        <>
            <Head>
                <title>Write It Down</title>
                <meta name="description" content="A note-taking app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <motion.article key={router.route} initial={{ opacity: 0, x: 0, y: 20}} animate={{ opacity: 1, x: 0, y: 0 }} exit={{ opacity: 0, x: 0, y: 20}} transition={{ ease: 'easeInOut', duration: 0.4, delay: 0.05,}}>
                { children }
            </motion.article>
        </>
    );
};

export default Layout;