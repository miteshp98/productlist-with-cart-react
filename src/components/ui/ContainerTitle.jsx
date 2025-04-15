function ContainerTitle({ type, className, children }) {
    if (type === "productListTitle") {
        return <h1 className={className}>{children}</h1>;
    } else {
        return <h2 className={className}>{children}</h2>;
    }
}

export default ContainerTitle;
