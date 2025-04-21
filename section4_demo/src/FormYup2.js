import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

//検証ルールを準備
const schema = yup.object({
  name: yup
    .string()
    .label("名前")
    .required("${label}は必須入力です。")
    .max(20, "${label}は${max}文字以内で入力してください")
    .trim().lowercase(),
  gender: yup.string().label("年齢").required("${label}は必須入力です。"),
  email: yup
    .string()
    .label("email")
    .required("${label}は入力必須です。")
    .email("${label}の形式が不正です。"),
  memo: yup
    .string()
    .label("memo")
    .required("${memo}は必須入力です。")
    .min(10, "${label}は${min}文字以上で入力してください")
    .test(
      "ng",
      ({ label }) => `${label}にNGワードが含まれています`,
      (value) => {
        //不適切ワード準備
        const ngs = ["暴力", "死", "グロ"];
        for (const ng of ngs) {
          if (value.includes(ng)) {
            return false;
          }
        }
        return true;
      }
    ),
});

export default function FormYup2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "名無権兵衛",
      gender: "male",
      email: "admin@example.com",
      memo: "I am Gonbe Nanashi",
    },
    //Yupに検証をゆだねる
    resolver: yupResolver(schema),
  });

  const onsubmit = (data) => console.log(data);
  const onerror = (error) => console.log(error);

  return (
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      <div>
        <label htmlFor="name">名前：</label>
        <br />
        <input id="name" type="text" {...register("name")} />
        <div>{errors.name?.message}</div>
      </div>
      <div>
        <label htmlFor="gender">性別：</label>
        <br />
        <label>
          <input
            id="gender"
            type="radio"
            value="male"
            {...register("gender")}
          />{" "}
          男性
        </label>
        <label>
          <input
            id="gender"
            type="radio"
            value="female"
            {...register("gender")}
          />{" "}
          女性
        </label>
        <div>{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <input type="email" id="email" {...register("email")} />
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">備考：</label>
        <textarea id="memo" {...register("memo")} />
        <div>{errors.memo?.message}</div>
      </div>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
}
