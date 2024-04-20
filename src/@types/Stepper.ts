
export type Colors = "bg-Primary" | "bg-TXT100" | "bg-Line"

export interface StepperProps {
    circleColor: Colors,
    title: string,
    subTitle: string,
    timeLapse: string,
    content?: string
}
