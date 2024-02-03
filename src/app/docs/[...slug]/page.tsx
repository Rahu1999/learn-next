const Docs = ({params}: {params: {slug: string[]}}) => {
    console.log("params===>",params)
    const slug = params.slug;

    if(slug.length == 1){
        return (
            <div>
                <h1>Docs components -: {slug[0]}</h1>
            </div>
        )
    }
    else if(slug.length == 2){
        return (
            <div>
                <h1>Docs components -: {slug[1]}</h1>
            </div>
        )
    }
    else{
        return (
            <h1>Docs home component</h1>
        )
    }
   
}

export default Docs;