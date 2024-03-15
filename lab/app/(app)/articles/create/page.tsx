'use client'
import {DatePicker, DatePickerProps, Space} from "antd";

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

export default function ArticlesCreatePage() {
    return (
        <>
            ArticlesCreatePage

            <Space direction="vertical">
                <DatePicker onChange={onChange} />
                <DatePicker onChange={onChange} picker="week" />
                <DatePicker onChange={onChange} picker="month" />
                <DatePicker onChange={onChange} picker="quarter" />
                <DatePicker onChange={onChange} picker="year" />
            </Space>
        </>
    )
}