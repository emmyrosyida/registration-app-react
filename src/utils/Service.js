import { from, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, concatMap, delay } from "rxjs/operators";

const Service = (urlPost, bodyPost) => {
  const res = from(urlPost);

  const subs = res.pipe(
    delay(1000),
    concatMap((item, index) =>
      ajax({
        url: item,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyPost[index],
      })
    ),
    catchError((error) => {
      return of(error);
    })
  );

  return subs;
};

export default Service;
