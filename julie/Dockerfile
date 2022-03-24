FROM fusuf/whatsasena:latest

RUN git clone https://github.com/MhmdMukarram/CHINTU-WA-BOT /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/MhmdMukarram/Alpha

CMD ["node", "bot.js"]
