import { View } from '@tarojs/components';

const RichText = (props: any) => {
    const { html } = props;
    return (
        <View className='rich-content'>
            <rich-text content={html}></rich-text>
        </View>
    )
}

export default RichText;