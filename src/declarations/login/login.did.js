export const idlFactory = ({ IDL }) => {
  const AutoScalingCanisterSharedFunctionHook = IDL.Func(
      [IDL.Text],
      [IDL.Text],
      [],
    );
  const ScalingLimitType = IDL.Variant({
    'heapSize' : IDL.Nat,
    'count' : IDL.Nat,
  });
  const ScalingOptions = IDL.Record({
    'autoScalingHook' : AutoScalingCanisterSharedFunctionHook,
    'sizeLimit' : ScalingLimitType,
  });
  const userdetails = IDL.Record({
    'firstname' : IDL.Text,
    'userEmail' : IDL.Text,
    'username' : IDL.Text,
    'userId' : IDL.Text,
    'investedId' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
    'userImage' : IDL.Text,
    'nationality' : IDL.Text,
    'phonenumber' : IDL.Text,
    'linkedInid' : IDL.Text,
    'projectsId' : IDL.Vec(IDL.Text),
    'qualification' : IDL.Text,
    'lastname' : IDL.Text,
  });
  const userlogin = IDL.Record({
    'userEmail' : IDL.Text,
    'userPassword' : IDL.Text,
  });
  const UserInfo = IDL.Record({
    'userName' : IDL.Text,
    'userEmail' : IDL.Text,
    'userPassword' : IDL.Text,
    'userConfirmPassword' : IDL.Text,
  });
  const Login = IDL.Service({
    'addprojectId' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'getPK' : IDL.Func([], [IDL.Text], ['query']),
    'getuserdetail' : IDL.Func([IDL.Text], [IDL.Opt(userdetails)], []),
    'login' : IDL.Func([userlogin], [IDL.Text], []),
    'signUp' : IDL.Func([UserInfo], [IDL.Text], []),
    'skExists' : IDL.Func([IDL.Text], [IDL.Bool], ['query']),
    'transferCycles' : IDL.Func([], [], []),
    'userdetail' : IDL.Func([IDL.Text, userdetails], [IDL.Text], []),
  });
  return Login;
};
export const init = ({ IDL }) => {
  const AutoScalingCanisterSharedFunctionHook = IDL.Func(
      [IDL.Text],
      [IDL.Text],
      [],
    );
  const ScalingLimitType = IDL.Variant({
    'heapSize' : IDL.Nat,
    'count' : IDL.Nat,
  });
  const ScalingOptions = IDL.Record({
    'autoScalingHook' : AutoScalingCanisterSharedFunctionHook,
    'sizeLimit' : ScalingLimitType,
  });
  return [
    IDL.Record({
      'owners' : IDL.Opt(IDL.Vec(IDL.Principal)),
      'partitionKey' : IDL.Text,
      'scalingOptions' : ScalingOptions,
    }),
  ];
};
