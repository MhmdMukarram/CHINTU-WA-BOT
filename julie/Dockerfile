FROM fusuf/whatsasena:latest

RUN git clone https://github.com/MhmdMukarram1/RED_ALPHA /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
