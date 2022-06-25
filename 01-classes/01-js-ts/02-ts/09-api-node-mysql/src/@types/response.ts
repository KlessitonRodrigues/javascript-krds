type RestResponse = { success: string; msg: string; data: string };

type createReaponse = (obj: RestResponse) => RestResponse;
