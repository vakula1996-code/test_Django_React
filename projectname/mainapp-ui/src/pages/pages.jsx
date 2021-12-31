import React from "react";
import PageAdditions from "./PageAdditions";
import PageHome from "./PageHome";
import PageRevision from "./PageRevision";
import PageRevisionList from "./PageRevisionList";
import PageTransfer from "./PageTransfer";
import PageWhoops404  from "./PageWoops404";

export function Home(){
    return(
        <PageHome/>
    );
}

export function Revision(){
    return(
        <PageRevision/>
    );
}


export function RevisionList(){
    return(
      <PageRevisionList/>
    );
}

export function Additions(){
    return(
        <PageAdditions/>
    );
}

export function Transfer(){
    return(
        <PageTransfer/>
    );
}


export function Whoops404(){
   return(
       <PageWhoops404/>
   );
}