import { Request, Response, NextFunction } from 'express';
import * as Yup from 'yup';

export default {
  store: async (req: Request, res: Response, next: NextFunction) => {
    const schema = Yup.object().shape({
      from: Yup.string().required('The sender name is required'),
      to: Yup.lazy((val: string[] | string) =>
        (Array.isArray(val)
          ? Yup.array().of(Yup.string())
          : Yup.string()
        ).required('The recipient is required')
      ),
      subject: Yup.string().required('The subject is required'),
      text: Yup.string().required('The e-mail body is required'),
    });
    try {
      await schema.validate(req.body, { abortEarly: false });
      return next();
    } catch (err) {
      return res.status(400).json({
        error: `${err?.errors?.join(', ') || 'Validation fails'}.`,
      });
    }
  },
};
