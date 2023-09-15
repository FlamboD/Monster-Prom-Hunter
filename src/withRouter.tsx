import React from 'react'
import { Params, useParams } from 'react-router';

export interface IParamProps {
    params: Readonly<Params<string>>
}

const withRouter = (WrappedComponent: (_: IParamProps) => JSX.Element) => (props: {[key: string]: any}) => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    )
}

export default withRouter;