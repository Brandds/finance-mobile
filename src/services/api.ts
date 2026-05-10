import { URL_BASE } from "@/constants/url_base_constants";
import axios from "axios";

export const api = axios.create({
  baseURL: URL_BASE,
  
  headers: {
    "Content-Type": "application/json",
  },

  timeout: 10000,
});