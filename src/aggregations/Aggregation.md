Default example:

    <div style={{width: "250px"}}>
    <Aggregation title="A Facet">
    {_ => <div>Content goes here</div>}
    </Aggregation>
    </div>

With actions:

    <div style={{width: "250px"}}>
    <Aggregation title="A Facet" showReset={true} showSearch={true} searchedValues={() => []}>
    {_ => <div>Content goes here</div>}
    </Aggregation>
    </div>

Collapsed:

    <div style={{width: "250px"}}>
    <Aggregation title="A Facet" open={false}>
    {_ => <div>Content goes here</div>}
    </Aggregation>
    </div>