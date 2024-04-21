import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface StepperProps {
    title: string,
    subTitle: string,
    timeLapse: string,
    position: number,
    content?: string
    link?: string,
    image?: string | StaticImport
}

export interface DataStepperBuilder {
    title: string,
    subTitle: string,
    timeLapse: string,
    content?: string
    link?: string,
    image?: string | StaticImport
}
