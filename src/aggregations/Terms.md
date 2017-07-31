Terms:

    const buckets = [{key: 'Term A', doc_count: 11345}, {key: 'Term B', doc_count: 123453}];

    <div style={{width: "275px"}}>
        <Terms
            title="Primary Site"
            buckets={buckets}
            searched={[]}
        />
    </div>

With searched values:

    const searched = [{key: 'Term C', doc_count: 134278}, {key: 'Term AA', doc_count: 77672}];
    const buckets = [{key: 'Term A', doc_count: 11345}, {key: 'Term B', doc_count: 123453}];

    <div style={{width: "275px"}}>
        <Terms
            title="Data Types"
            buckets={buckets}
            searched={searched}
        />
    </div>

With filter:

    const searched = [{key: 'Term C', doc_count: 134278}, {key: 'Term AA', doc_count: 77672}];
    const buckets = [{key: 'Term A Term A Term A Term A Term A', doc_count: 416434}, {key: 'Term B', doc_count: 343427}, {key: 'Term EGB', doc_count: 435452}, {key: 'Term B', doc_count: 46632}, {key: 'Term EEB', doc_count: 44112}, {key: 'Term CC', doc_count: 543532}, ];

    <div style={{width: "275px"}}>
        <Terms
            title="Data Types"
            buckets={buckets}
            searched={searched}
        />
    </div>

With long labels:

    const searched = [{key: 'Term C Term C Term C Term C v Term C', doc_count: 134278}, {key: 'Term AA',  doc_count: 77672}];
    const buckets = [{key: 'Term A Term A Term A Term A Term A', doc_count: 416434}, {key: 'Term B', doc_count: 343427}, {key: 'Term EGB', doc_count: 435452}, {key: 'Term B', doc_count: 46632}, {key: 'Term EEB', doc_count: 44112}, {key: 'Term CC', doc_count: 543532}, ];

    <div style={{width: "275px"}}>
        <Terms
            title="Experimental Strategies"
            buckets={buckets}
            searched={searched}
        />
    </div>