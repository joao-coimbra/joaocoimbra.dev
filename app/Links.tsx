"use client";

import Link from "next/link";
import { GithubLogo } from "@phosphor-icons/react";

const Links = () => (
    <div>
        <Link
            href="https://github.com/joao-coimbra"
            target="_blank"
            className="block opacity-40 duration-200 hover:opacity-100 active:scale-95 hover:ring-4 hover:ring-gray-400/5 fill-white p-4 rounded-lg hover:bg-white/5"
        >
            <GithubLogo size={36} weight="fill" color="current" />
        </Link>
    </div>
);

export default Links;
