import { CSSProperties, ReactElement } from "react"

interface FlexBoxProps {
    between?: boolean
    column?: boolean
    around?: boolean
    wrap?: boolean
    styleProps?: CSSProperties
    children: ReactElement[] | ReactElement
    view?:boolean
}

export const FlexBox = ({wrap,view, between, column, around ,styleProps, children}: FlexBoxProps) => {
    return (
        <div style={{
            ...styleProps,
            display: "flex",
            alignItems: "center",
            justifyContent: between ? "space-between" : around ? "space-around" : "center" ,
            flexDirection: column ? "column": "row",
            flexWrap: wrap ? "wrap" : "nowrap",
            minHeight: view ? "88vh" : ""
            }}>
            {children}
        </div>
    )
}