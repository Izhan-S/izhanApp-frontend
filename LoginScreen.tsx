import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/RootNavigator";
import { useDispatch } from 'react-redux';
import { login } from '../../redux-store/slices';
import { loginUser } from '../components/api/auth.js';


type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

type FormData = {
  username: string;
  password: string;
};

function LoginScreen({ navigation }: Props) {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async ({ username, password }: FormData) => {
    try {
      const data = await loginUser({ username, password });
      dispatch(login(username));
      navigation.navigate("Screen1");
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Login failed. Please try again.";
      setError("password", { message });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png" }}
        style={styles.image}
      />
      <Text style={styles.title}>Hello! Please login to proceed</Text>

      <View style={styles.inputBox}>
        <Text style={styles.icon}>📱</Text>
        <Controller
          control={control}
          name="username"
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
            validate: (value) =>
              !/^\d+$/.test(value) || "Username can't be only numbers!",
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Username"
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholderTextColor="#777"
            />
          )}
        />
      </View>
      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

      <View style={styles.inputBox}>
        <Text style={styles.icon}>🔒</Text>
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholderTextColor="#777"
            />
          )}
        />
      </View>
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <Text style={styles.forgotText}>Forgot Password?</Text>

      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>→ Login</Text>
      </TouchableOpacity>

      <View style={styles.signupRow}>
        <Text style={styles.signupText}>Don’t have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    paddingHorizontal: 30,
    backgroundColor: "#e8f8f5",
    alignItems: "center",
    flexGrow: 1,
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 25,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#023020",
    marginBottom: 30,
    textAlign: "center",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    color: "#000",
  },
  forgotText: {
    alignSelf: "flex-end",
    marginTop: 5,
    marginBottom: 15,
    color: "#007b83",
    fontWeight: "500",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "#007b83",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    width: "100%",
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    color: "#555",
    fontSize: 15,
  },
  signupLink: {
    color: "#007b83",
    fontWeight: "600",
    fontSize: 15,
  },
});

export default LoginScreen;
