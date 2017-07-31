Autocomplete:

    <div style={{width: "275px"}}>
        <IdSearch title="Genes" searched={[]} />
    </div>

With searched values:

    const searchedText = ['Term C', 'Term AA'];

    <div style={{width: "275px"}}>
        <IdSearch title="Genes" searched={searchedText} />
    </div>