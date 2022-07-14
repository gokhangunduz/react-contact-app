function List({contact}) {
    return(
        <>
            <section>
                <div className="container mx-auto grid justify-center pt-9" >
                    <ul>
                        {contact.map((contact) => <li className="text-center py-2" >{contact.fullname} | {contact.phone}</li>)}
                    </ul>
                </div>
            </section>
        </>
    )
}
export default List