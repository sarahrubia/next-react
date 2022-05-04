import React from 'react';
import Link from 'next/link';

function Home () {

    return (
        <>
            <div>
                Home
            </div>
            <Link href="/about">
                About
            </Link>
        </>
    )
}

export default Home