
export interface BusinessRulesError {
  AttempedValue?: string;
  ErrorCode?: number;
  ErrorMessage: string;
  PropertyMessage?: string;
}

export interface IErrorMessage {
  error(businessRules: BusinessRulesError[]);
}
