import * as yup from 'yup';

//エラーメッセージ情報を宣言
const jpLocal = {
    mixed: {
        required: param => `${param.label}は必須です。`,
        oneOf: param => `${param.label}は${param.values}のいずれかでなければなりません。`,
    },
    string: {
        length: param => `${param.label}は${param.length}文字ちょうどでなければいけません。`,
        min: param => `${param.label}は${param.min}文字以上でなければいけません。`,
        max: param => `${param.label}は${param.max}文字以下でなければいけません。`,
        matches: param => `${param.label}は${param.regex}形式に一致してなければいけません。`,
        email: param => `${param.label}はメールアドレス形式でなければいけません。`,
        url: param => `${param.label}はURL形式でなければいけません。`,
        },
    number: {
        min: param => `${param.label}は${param.min}文字以上でなければいけません。`,
        max: param => `${param.label}は${param.max}文字以下でなければいけません。`,
    },
};

yup.setLocale(jpLocal);
export default yup