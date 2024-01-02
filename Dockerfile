FROM public.ecr.aws/lambda/nodejs:18
COPY . .
RUN npm install
RUN npm run build
CMD [ "dist/main-serve.handler" ]